CREATE TABLE usuarios(
id bigint(20) NOT NULL AUTO_INCREMENT,
identificacion varchar(50) UNIQUE DEFAULT NULL,
contrasenia varchar(50) DEFAULT NULL,
rol varchar(50) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('jgomez43','sdfsd4s45','admin');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('ghernndez3','sdfdg4s45','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('lvargasc10','sd654s45','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('nnunez9','gfhdfgdf435','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('cperez76','syujhjhgj','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('jmurcia02','324345','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('afernan45','123456wfds','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('gsuarez1','sdfwkuig6','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('bcristancho6','24dfgdfh','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('hugof99','dfj8dfg','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('jhonf23','bnw45bnnyfd','admin');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('mgomez54','123cdgvsyh6','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('lcardenasm4','sdf6hdfsg','empleado');
INSERT INTO usuarios(identificacion,contrasenia,rol) VALUES('fbernal123','egrtgerr','empleado');
