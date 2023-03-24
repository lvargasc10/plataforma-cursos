CREATE TABLE empresas(
id bigint(20) NOT NULL AUTO_INCREMENT,
identificacion varchar(50) NOT NULL,
nombre_empresa varchar(50) DEFAULT NULL,
direccion varchar(50) DEFAULT NULL,
razon_social varchar(100) DEFAULT NULL,
fecha_creacion date DEFAULT NULL,
correo varchar(50) DEFAULT NULL,
telefono varchar(50) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('001','Teleperformance','CL 52 47-42 EDF Coltejer P30','Teleperformance Colombia S A S','2000-10-11','rueda@postobon.com.co','4049080');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('002','cocacola','AVENIDA CARRERA 45 N 103 60 PISO 8',' The Coca Cola Company.','1998-09-10','clientes@informacolombia.com','498465198');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('003','postobon','CL 52 47 42 EDF Coltejer P 30','POSTOBÓN S.A.','1999-09-10','arueda@postobon.com.co','1245436546');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('004','alqueria',' CL 52 47 42','Productos Naturales de la Sabana S.A','1999-09-10','alqueria@gmail.com.co','85675546');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('005','alpina',' Carrera 4 Bis N° 9-24 ','Sociedad BIC','2005-09-10','alpina@gmail.com.co','1248798566');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('006','amazon','CALLE 26 92 32','Amazon Operation Services Colombia S A S.','1989-09-10','amazon@gmail.com.co','956743545345');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('007','Berkshire','3555 Farnam St., Omaha,','Berkshire Hathaway, Inc.','1984-09-10','abrskh@gmail.com.co','6548789564');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('008','visa',' Cra. 11 #77a-49','Visa Colombia S A.','1974-09-10','visa@gmail.com.co','1245436546');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('009','avianca',' Cl. 15 Sur #1945','Aerovías del Continente Americano,','1981-09-10','avianca@gmail.com.co','3453463878');
INSERT INTO empresas(identificacion,nombre_empresa,direccion,razon_social,fecha_creacion,correo,telefono) VALUES('010','comfandi','Cl 8 # 6 - 23','Caja de Compensación Familiar del Valle del Cauca Comfamiliar Andi ','1967-09-10','acomfandi@gmail.com.co','456567564');