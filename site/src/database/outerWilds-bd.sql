CREATE DATABASE OuterWilds;

USE OuterWilds;

DROP DATABASE OuterWilds;

-- ------------------------------------------ --

CREATE TABLE Lugar (
	 idLugar INT PRIMARY KEY AUTO_INCREMENT
    ,nome VARCHAR (100)
);

CREATE TABLE Diario (
	 idDiario INT PRIMARY KEY AUTO_INCREMENT
	,titulo VARCHAR (100)
    ,descricao VARCHAR (500)
    ,fkLugar INT
    ,FOREIGN KEY (fkLugar) REFERENCES Lugar(idLugar)
);

-- ------------------------------------------ --
    
INSERT INTO Lugar (nome) VALUES
	 ('Recanto Lenhoso')
    ,('Gêmeo Cálido')
    ,('Gêmeo Cinzento')
    ,('Vale Incerto')
    ,('Abrolho Sombrio')
    ,('Profundezas do Gigante')
    ,('Lua Quântica')
    ,('Estação Solar')
    ,('Cometa Xereta')
    ,('Luzeiro do Vale');
    
INSERT INTO Diario (titulo, descricao, fkLugar) VALUES
	 ('A procura de Riebek','Achei o Riebek dentro da boca de um tamboril gigante! Ele está bem e me deu infos que...',5)
    ,('Mistério do Cometa Xereta','Após o cometa ficar perto suficiente do sol, o gelo começa a derreter...',9);




