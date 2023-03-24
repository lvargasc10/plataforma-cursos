package edu.ucentral.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import edu.ucentral.common.usuario.model.Usuario;


public interface UsuariosRepository extends JpaRepository<Usuario, Long> {

}
