import {DataTypes,Model,Optional} from 'sequelize';
import seqConnection from '../config';

interface IngredientAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    foodGroup?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

// we're telling the Model that 'id' is optional --see docs of sequelize
export interface IngredientInput extends Optional<IngredientAttributes, 'id' | 'slug' > {}
export interface IngredientOuput extends Required<IngredientAttributes> {}


/*
The definite assignment assertion is a feature that allows a ! to be placed after instance property and variable declarations to relay to TypeScript that a variable is indeed assigned for all intents and purposes, even if TypeScript’s analyses cannot detect so

let x: number;
initialize();
console.log(x + x);
//          ~   ~
// Error! Variable 'x' is used before being assigned.
function initialize() {
  x = 10;
}
*/

class Ingredient extends Model <IngredientAttributes,IngredientInput> implements IngredientAttributes {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string 
    public foodGroup!: string

    public readonly createdAt!: Date ;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Ingredient.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    foodGroup: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    sequelize: seqConnection,
    paranoid: true
  })

export default Ingredient