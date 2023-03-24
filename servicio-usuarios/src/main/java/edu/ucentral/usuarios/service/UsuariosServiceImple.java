package edu.ucentral.usuarios.service;


import org.springframework.stereotype.Service;
import edu.ucentral.common.usuario.model.Usuario;
import edu.ucentral.commons.service.service.CommonServiceImp;
import edu.ucentral.usuarios.repository.UsuariosRepository;

@Service
public class UsuariosServiceImple  extends CommonServiceImp<Usuario,UsuariosRepository> implements UsuariosService {
	
	

}
