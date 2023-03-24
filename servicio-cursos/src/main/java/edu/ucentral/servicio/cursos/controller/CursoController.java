package edu.ucentral.servicio.cursos.controller;

import java.util.Optional;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.ucentral.common.curso.model.Curso;
import edu.ucentral.commons.service.controller.CommonController;
import edu.ucentral.servicio.cursos.service.CursoService;

@RestController
public class CursoController extends CommonController <Curso,CursoService>  {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Curso curso, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Curso> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Curso curs = optional.get();
		curs.setIdentificacion(curso.getIdentificacion());
		curs.setNombreCurso(curso.getNombreCurso());	
		curs.setDocente(curso.getDocente());
		curs.setLugarAsistencia(curso.getLugarAsistencia());
		curs.setFechaInicio(curso.getFechaInicio());
		curs.setFechaFinalizacion(curso.getFechaFinalizacion());
		curs.setCosto(curso.getCosto());
		curs.setDescripcion(curso.getDescripcion());
		curs.setInformacion(curso.getInformacion());
		curs.setHorario(curso.getHorario());
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(curs));
	}

	
}
