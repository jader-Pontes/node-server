import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instancers/mysql'

export interface PhraseInstance extends Model {
    id: number;
    author: string;
    txt: string;
};

export const Phrase = sequelize.define<PhraseInstance>('phrases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.CHAR
    },
    txt: {
        type: DataTypes.TEXT
    },
}, {
    tableName: 'phrases',
    timestamps: false
});