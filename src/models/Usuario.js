const {Model, DataTypes} = require("sequelize");

class Usuario extends Model{
    static init (sequelize){
        super.init(
            {
            primeiro_nome: DataTypes.STRING,
            ultimo_nome: DataTypes.STRING,
            data_de_nascimento: DataTypes.DATE,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            nickname: DataTypes.STRING,
            sexo_id: DataTypes.INTEGER,
            estado_id: DataTypes.INTEGER,            
        },
        {
            sequelize,
            tableName: "tblUsuario"
        }
        );        
    }
    static associate(models){        
        this.belongsTo(models.Sexo);
        this.belongsTo(models.Estado);        
        this.hasMany(models.Postagem, {foreignKey: "usuario_id"});
        this.hasMany(models.Comentario);
        this.hasOne(models.Identificacao);
        
        // this.hasMany( models.Postagem);
        // this.belongsToMany(models.Genero, {through: "tblUsuarioGenero" });
        // this.belongsToMany(models.Jogo, {through: "tblUsuarioJogo"});
    } 
}

module.exports = Usuario;