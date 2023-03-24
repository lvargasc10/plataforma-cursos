package edu.ucentral.empresas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import edu.ucentral.common.empresa.model.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

}
