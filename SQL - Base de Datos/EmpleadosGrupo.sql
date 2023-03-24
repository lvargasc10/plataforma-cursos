CREATE TABLE cursos(
id bigint(20) NOT NULL AUTO_INCREMENT,
identificacion varchar(50) DEFAULT NULL,
nombre_curso varchar(50) DEFAULT NULL,
docente varchar(50) DEFAULT NULL,
lugar_asistencia varchar(50) DEFAULT NULL,
fecha_inicio date DEFAULT NULL,
fecha_finalizacion date DEFAULT NULL,
informacion varchar(50) DEFAULT NULL,
costo double DEFAULT NULL,
descripcion varchar(50) DEFAULT NULL,
horario varchar(50) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('001','Marketing Empresarial','José Paéz','Calle 22 # 12','2022-01-01','2022-03-03','Curso para el manejo de redes sociales.',200000,'Lunes a viernes - 3pm a 6pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('002','Mejore en ventas','Carla Quintero','Calle 50 # 38','2022-10-10','2022-12-12','Curso para mejorar en ventas.',500000,'Lunes a jueves - 7am a 10am');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('101','Seminario ventas','Pedro Páramo','Calle 22 # 12','2022-05-05','2022-06-06','Seminario sobre ventas.',100000,'miercoles a viernes - 1pm a 5pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('102','Estadistica','Maicol Cristancho','Carrera 1 # 95-04','2021-11-05','2021-12-03','Curso para hacer encuestar y analizarlas.',4000000,'Lunes a viernes - 11am a 2pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('103','Matematicas','Carlos Urbano','Transversal 28E # 21','2020-10-10','2020-12-12','Curso para resolver integrales.',900000,'Lunes y sabado - 7am a 10am');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('104','Contabilidad','Nelly Martinez','Calle 56 # 12-95','2021-02-05','2021-06-06','Curso para el manejo de una empresa.',90000,'Sabando - 3pm a 6pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('105','Filosofia','Carol Moreno','Calle 45 # 1-34','2021-09-25','2021-09-29','Curso para analizar el pensamiento del ser humano.',250000,'Martes y jueves- 11am a 3pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('106','Algebra lineal','Juan Elizondo','Carrera 6 # 3-95','2020-04-19','2020-05-22','Curso para analizar matrices.',70000,'Jueves - 7am a 12mm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('107','Ingles','Davis Reyes','Arturo Rueda','Calle 53 # 24-30','2021-12-01','2022-01-31','Curso basico de verbos.',100000,'miercoles - 1pm a 2pm');
INSERT INTO cursos(identificacion,nombre_curso,docente,lugar_asistencia,fecha_inicio,fecha_finalizacion,informacion,costo,horario) VALUES('003','Seminario Sistemas','Maria Gonzales','Transversal 54 # 4-59','2022-02-27','2022-03-31','Seminario manejo basico de microsof office.',500000,'sabado y viernes - 7am a 11am');
