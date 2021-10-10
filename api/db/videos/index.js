'use strict';
const schemaInstance = require('./schema');
const classMethods = require('./classMethods');

class Videos {
    getDefinition(sequelize, DataTypes) {
        const schema = schemaInstance.getSchema(DataTypes);
        const options = {
            timestamps: true,
            createdAt: 'created',
            updatedAt: false
        };
        const model = sequelize.define('videos', schema, options);
        classMethods.getClassMethods(model);
        return model;
    }
}

module.exports = (sequelize, DataTypes) => {
    return new Videos().getDefinition(sequelize, DataTypes);
}
