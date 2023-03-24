package edu.ucentral.servicio.cursos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.ucentral.common.curso.model.Curso;



public interface CursoRepository extends JpaRepository<Curso, Long> {

}
