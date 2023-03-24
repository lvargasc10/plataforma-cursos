CREATE TABLE grupos(
id bigint(20) NOT NULL AUTO_INCREMENT,
create_at date DEFAULT NULL,
curso_id bigint(20) DEFAULT NULL,
grupo int DEFAULT NULL,
hora varchar(50) DEFAULT NULL,
salon varchar(50) DEFAULT NULL,
PRIMARY KEY(id)
);

CREATE TABLE empleados_grupo(
id bigint(20) NOT NULL AUTO_INCREMENT,
fallas int DEFAULT NULL,
nota_final double DEFAULT NULL,
empleado_id bigint(20) DEFAULT NULL,
grupo_id bigint(20) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 1,101,"1pm","Aula Multiple 403");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 2,102,"6pm","Salon Multiple 213");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 1,103,"2pm","Audiovisuales 101");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 3,104,"4pm","Salon call 26");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 2,105,"5pm","Aula Multiple 203");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 1,601,"10am","Aula Multiple 203");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 3,201,"11am","Audiovisuales 101");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 4,111,"12m","Aula Multiple 403");
INSERT INTO grupos(create_at, curso_id,grupo,hora,salon) VALUES(NOW(), 2,321,"8pm","Salon call 26");


INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id ) VALUES(1, 5.0, 1,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.0, 2,2);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 1.6, 3,3);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(6, 4.3, 4,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(9, 3.0, 3,5);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 2.5, 1,6);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 0.5, 2,6);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 3.5, 3,6);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(1, 1.5, 4,6);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id ) VALUES(21, 0.0, 9,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.1, 8,2);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 1.0, 7,3);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(6, 4.2, 6,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(9, 3.5, 5,5);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 3.5, 4,7);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 1.5, 3,7);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.5, 2,8);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(1, 4.5, 1,9);

INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id ) VALUES(1, 3.0, 8,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.2, 7,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 1.6, 7,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(6, 4.3, 6,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(9, 3.7, 5,1);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 2.5, 4,2);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 0.5, 3,2);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 3.5, 2,2);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(1, 1.5, 1,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id ) VALUES(21, 0.0, 1,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.1, 2,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 1.0, 3,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(6, 4.2, 4,4);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(9, 3.5, 5,9);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(3, 3.5, 6,9);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 1.5, 7,9);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(0, 4.5, 8,9);
INSERT INTO empleados_grupo(fallas, nota_final, empleado_id, grupo_id) VALUES(1, 4.5, 9,9);


select * from grupos
