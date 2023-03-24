package edu.ucentral.servicio.cursos.service;


import edu.ucentral.common.curso.model.Curso;
import edu.ucentral.commons.service.service.CommonServiceImp;
import edu.ucentral.servicio.cursos.repository.CursoRepository;
import org.springframework.stereotype.Service;


@Service
public class CursoServiceImple extends CommonServiceImp<Curso,CursoRepository> implements CursoService {


}
