CREATE DATABASE OuterWilds;

USE OuterWilds;

DROP DATABASE OuterWilds;

-- ------------------------------------------ --

CREATE TABLE Lugar (
	 idLugar INT PRIMARY KEY AUTO_INCREMENT
    ,nome VARCHAR (100)
);

CREATE TABLE Usuario (
	 idUsuario INT PRIMARY KEY AUTO_INCREMENT
    ,apelido VARCHAR (45)
    ,senha VARCHAR (45)
    ,planetaNatal VARCHAR (45)
);

CREATE TABLE Diario (
	 idDiario INT PRIMARY KEY AUTO_INCREMENT
	,titulo VARCHAR (100)
    ,descricao VARCHAR (500)
    ,fkLugar INT
    ,FOREIGN KEY (fkLugar) REFERENCES Lugar(idLugar)
    ,fkUsuario INT
    ,FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Avaliacao (
	 idAvaliacao INT PRIMARY KEY AUTO_INCREMENT
    ,nota VARCHAR (20)
    ,fkUsuario INT
    ,FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

SELECT * FROM Avaliacao;

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
    
INSERT INTO Diario (titulo, descricao, fkLugar, fkUsuario) VALUES
	 ('A procura de Riebek','Achei o Riebek dentro da boca de um tamboril gigante! Ele está bem e me deu infos que...',5,1)
    ,('Mistério do Cometa Xereta','Após o cometa ficar perto suficiente do sol, o gelo começa a derreter...',9,1);	





