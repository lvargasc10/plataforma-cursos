package edu.ucentral.common.usuario.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.UniqueElements;


@Entity
@Table(name="usuarios")
public class Usuario implements Serializable {
	
	@Id
	@GeneratedValue(strategy = 	GenerationType.IDENTITY)
	private Long id;
	//@UniqueElements
	@Column(unique=true)
	private String identificacion;	
	private String contrasenia;
	private String rol;
	
	
	
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getIdentificacion() {
		return identificacion;
	}
	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}
	public String getContrasenia() {
		return contrasenia;
	}
	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	/**
	 * Identificación del atributo.
	 */
	private static final long serialVersionUID = 1L;
	
	public boolean equals(Object obj) {
		if(this == obj) {
			return true;
		}
		
		if(!(obj instanceof Usuario)) {
			return false;
		}
		
		Usuario usuario = (Usuario) obj;
		return this.id!=null&& this.id.equals(usuario.getId());
		
	}
	/**
	 * 
	 */
}
	
