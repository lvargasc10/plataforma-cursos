package edu.ucentral.usuarios.controller;


import java.util.Optional;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.ucentral.common.usuario.model.Usuario;
import edu.ucentral.commons.service.controller.CommonController;
import edu.ucentral.usuarios.service.UsuariosService;

@RestController
public class UsuariosController extends CommonController<Usuario,UsuariosService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Usuario usuario, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Usuario> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Usuario usua = optional.get();		
		usua.setIdentificacion(usuario.getIdentificacion());		
		usua.setContrasenia(usuario.getContrasenia());
		usua.setRol(usuario.getRol());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(usua));
	}
	
}