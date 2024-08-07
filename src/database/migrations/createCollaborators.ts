import { QueryInterface, DataTypes, Model } from "sequelize";
import ICollaborators from "../../Interfaces/collaborators/ICollaborators";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICollaborators>>('collaborators', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'route_id',
    }})
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('collaborators')
  }
}