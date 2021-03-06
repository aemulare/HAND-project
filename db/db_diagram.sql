-- 01 Reference table LANGUAGES
CREATE TABLE ref_languages
(
    "SK_Language" INTEGER PRIMARY KEY NOT NULL,
    "ISO639-3Code" CHAR(3) NOT NULL,
    "ISO639-2BCode" CHAR(3),
    "ISO639-2TCode" CHAR(3),
    "ISO639-1Code" CHAR(2),
    language_name VARCHAR(255) NOT NULL,
    scope VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    "MacroLanguageISO639-3Code" CHAR(3) NOT NULL,
    "MacrolanguageName" VARCHAR(255) NOT NULL,
    is_child BOOLEAN NOT NULL
);
COMMENT ON COLUMN ref_languages."ISO639-3Code" IS 'The ISO-639-3 code. Unique in the dataset';
COMMENT ON COLUMN ref_languages."ISO639-2BCode" IS 'The B-Code for ISO-639-2';
COMMENT ON COLUMN ref_languages."ISO639-2TCode" IS 'The T-Code for ISO-639-2';
COMMENT ON COLUMN ref_languages."ISO639-1Code" IS 'The ISO-639-1 Code';
COMMENT ON COLUMN ref_languages.language_name IS 'The English name of the language';
COMMENT ON COLUMN ref_languages.scope IS 'Indicates whether this is a macro language or an individual or constructed language';
COMMENT ON COLUMN ref_languages.type IS 'The specific type of the language. For example, Klingon is classified as a “constructed” language';
COMMENT ON COLUMN ref_languages."MacroLanguageISO639-3Code" IS 'The ISO-639-3 code of the parent language, if any.';
COMMENT ON COLUMN ref_languages."MacrolanguageName" IS 'The name of the parent language, if any.';
COMMENT ON COLUMN ref_languages.is_child IS '1 if this is a child language, 0 otherwise';


-- 02 Reference table COUNTRIES
CREATE TABLE ref_countries
(
    sk_country INTEGER PRIMARY KEY NOT NULL,
    number INTEGER NOT NULL,
    alpha2code CHAR(2) NOT NULL,
    alpha3code CHAR(3) NOT NULL,
    country_name VARCHAR(255) NOT NULL,
    topleveldomain CHAR(3) NOT NULL
);
COMMENT ON COLUMN ref_countries.number IS 'The ISO Country Numerical code';
COMMENT ON COLUMN ref_countries.alpha2code IS 'The 2 character ISO Country code';
COMMENT ON COLUMN ref_countries.alpha3code IS 'The 3 character ISO country code';
COMMENT ON COLUMN ref_countries.country_name IS 'The English name of the country';
COMMENT ON COLUMN ref_countries.topleveldomain IS 'Top level domain of the country. Mostly, but not always the same as the Alpha2Code';


-- 03 Reference table US STATES
CREATE TABLE ref_us_states
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    abbreviation CHAR(2) NOT NULL
);
CREATE UNIQUE INDEX us_states_id_uindex ON ref_us_states (id);
CREATE UNIQUE INDEX us_states_abbreviation_uindex ON ref_us_states (abbreviation);


-- 04 Table TAGS
CREATE TABLE tags
(
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(32) NOT NULL
);
CREATE UNIQUE INDEX tags_id_uindex ON tags (id);


-- 05 Table ADDRESSES
CREATE TABLE addresses
(
    id SERIAL PRIMARY KEY,
    address_line_1 VARCHAR(128) NOT NULL,
    address_line_2 VARCHAR(64),
    address_line_3 VARCHAR(64),
    city VARCHAR(64) NOT NULL,
    district VARCHAR(128),
    country_id INTEGER NOT NULL,
    postcode VARCHAR(16) NOT NULL,
    state_id INTEGER,
    CONSTRAINT addresses_countries___fk FOREIGN KEY (country_id) REFERENCES ref_countries (sk_country),
    CONSTRAINT addresses_states___fk FOREIGN KEY (state_id) REFERENCES ref_us_states (id)
);
COMMENT ON COLUMN addresses.district IS 'US state, Canada province, UK county, etc.';
COMMENT ON COLUMN addresses.state_id IS 'for United States only';
CREATE UNIQUE INDEX addresses_id_uindex ON addresses (id);


-- 06 Table USERS
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(256) NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    dob DATE NOT NULL,
    phone VARCHAR(32) NOT NULL,
    first_name VARCHAR(64) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    address_id INTEGER NOT NULL,
    userpic BYTEA,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    CONSTRAINT users_addresses___fk FOREIGN KEY (address_id) REFERENCES addresses (id)
);
COMMENT ON COLUMN users.email IS 'user login';
COMMENT ON COLUMN users.password_hash IS 'encrypted password';
COMMENT ON COLUMN users.dob IS 'date of birth';
CREATE UNIQUE INDEX users_id_uindex ON users (id);
CREATE UNIQUE INDEX users_email_uindex ON users (email);
CREATE UNIQUE INDEX users_password_hash_uindex ON users (password_hash);


-- 07 Table POSTS
CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(32) NOT NULL,
    description VARCHAR(512),
    total_requests INTEGER,
    is_open BOOLEAN DEFAULT true,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    CONSTRAINT posts_users___fk FOREIGN KEY (user_id) REFERENCES users (id)
);
COMMENT ON COLUMN posts.is_open IS 'for indication open/closed';
CREATE UNIQUE INDEX posts_id_uindex ON posts (id);


-- 08 Table POST_ITEMS
CREATE TABLE post_items
(
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    request_count INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    CONSTRAINT post_items__posts___fk FOREIGN KEY (post_id) REFERENCES posts (id),
    CONSTRAINT post_items__tags___fk FOREIGN KEY (tag_id) REFERENCES tags (id)
);
COMMENT ON COLUMN post_items.request_count IS 'for how many persons this kind of help [tag] is requested OR how many [tag] items (cars, workers, boats, etc.)';
CREATE UNIQUE INDEX post_items_id_uindex ON post_items (id);


-- 09 Table OFFERS
CREATE TABLE offers
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    post_item_id INTEGER NOT NULL,
    comment VARCHAR(256) NOT NULL,
    status INTEGER NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    CONSTRAINT offers_users___fk FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT offers__post_items___fk FOREIGN KEY (post_item_id) REFERENCES post_items (id)
);
CREATE UNIQUE INDEX offers_id_uindex ON offers (id);

