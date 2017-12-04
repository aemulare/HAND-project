module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('offers', {
    comment: DataTypes.STRING,
    status: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
  });

  Offer.associate = function(db) {
    Offer.belongsTo(db.users);
    Offer.belongsTo(db.resources);
  }
  
  return Offer;
};
