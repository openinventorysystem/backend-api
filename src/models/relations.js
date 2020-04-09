/**
 * Defines relationships between database models.
 *
 * @param {Models} database Database object
 */
module.exports = (database) => {
    database.Role.hasMany(database.RegistrationToken, { foreignKey: 'assignedRoleId', onDelete: 'RESTRICT' });
    database.RegistrationToken.belongsTo(database.Role, { foreignKey: 'assignedRoleId' });
    database.Role.hasMany(database.User, { foreignKey: 'roleId', onDelete: 'RESTRICT' });
    database.User.belongsTo(database.Role, { foreignKey: 'roleId' });
    database.Role.hasMany(database.RolePermission, { foreignKey: 'roleId' });
    database.User.hasMany(database.LabAssign, { foreignKey: 'userId' });
    database.Lab.hasMany(database.LabAssign, { foreignKey: 'labId' });
    database.ItemSet.hasMany(database.Attribute, { foreignKey: 'itemSetId' });
    database.Item.hasMany(database.ItemAttribute, { foreignKey: 'itemId' });
    database.Item.belongsTo(database.Lab, { foreignKey: 'labId' });
    database.Item.belongsTo(database.ItemSet, { foreignKey: 'itemSetId' });
    database.Lab.hasMany(database.Item, { foreignKey: 'labId', onDelete: 'RESTRICT' });
    database.ItemSet.hasMany(database.Item, { foreignKey: 'itemSetId', onDelete: 'RESTRICT' });
    database.Lab.belongsToMany(database.User, { through: database.LabAssign, foreignKey: 'labId' });
    database.User.belongsToMany(database.Lab, { through: database.LabAssign, foreignKey: 'userId' });
};
