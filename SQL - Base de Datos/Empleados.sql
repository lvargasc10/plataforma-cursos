CREATE TABLE empleados(
id bigint(20) NOT NULL AUTO_INCREMENT,
identificacion varchar(50) UNIQUE DEFAULT NULL,
nombre_empleado varchar(50) DEFAULT NULL,
fecha_nacimiento date DEFAULT NULL,
correo varchar(50) DEFAULT NULL,
telefono varchar(50) DEFAULT NULL,
empresa_id bigint(20) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('69584596','Juan Rincon','1956-06-06','juanr@gmail.com','45167461',1);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('58963287','Juanita Blades','1945-12-31','juanitab@gmail.com','598265164',4);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('1025489574','Sebastian Leon','1999-07-30','sebastianl@gmail.com','59234234',2);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('59658425','Carlos Moreno','1939-10-14','carlosm@gmail.com','2342364',3);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('1010258965','Goliag Anton','1997-02-28','goliada@gmail.com','7897164',6);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('35975596','Tomas Gonzales','1965-05-15','tomasg@gmail.com','343453464',8);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('48587456','Yulian Gomez','1967-08-20','yuliang@gmail.com','87987965164',2);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('1028751492','Oscar Reyes','1995-06-07','oscarr@gmail.com','3454765756',4);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('1058456874','Franco Martinez','1992-09-21','francom@gmail.com','098765343534',5);
INSERT INTO empleados(identificacion,nombre_empleado, fecha_nacimiento,correo,telefono,empresa_id) VALUES('1010258966','Wendy Lizarazo','1999-12-24','wendyl@gmail.com','345346545764',1);

SELECT * FROM empleados WHERE identificacion = 1010258966;

