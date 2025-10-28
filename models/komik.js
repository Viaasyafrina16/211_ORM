module.export = (sequelize, Datatypes) => {
    const komik = sequelize.define("komik",{
        id : {
            type : Datatypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        title:{
            type : DataTypes.STRING,
        },
        description: {
            type : DataTypes.STRING,
        },
        author : {
            type: DataTypes.STRING,
        }
    });
    return komik;
};

