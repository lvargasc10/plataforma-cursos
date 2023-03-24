package edu.ucentral.servicio.grupo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import edu.ucentral.common.curso.model.Curso;

@Entity
@Table(name="grupos")
public class Grupo implements Serializable {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	@Temporal(TemporalType.DATE)
	@Column(name = "create_at")
	private Date createAt;
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	@JoinColumn(name="grupo_id")
	private List<EmpleadosGrupo> empleados;
	private int grupo;
	@ManyToOne
	@JoinColumn(name="curso_id")
	private Curso curso;
	private String hora;
	private String salon;	
	
	
	public int getGrupo() {
		return grupo;
	}

	public void setGrupo(int grupo) {
		this.grupo = grupo;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public String getSalon() {
		return salon;
	}

	public void setSalon(String salon) {
		this.salon = salon;
	}

	public void setEmpleados(List<EmpleadosGrupo> empleados) {
		this.empleados = empleados;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	@PrePersist
	public void prePersist() {
		this.createAt = new Date();
	}
	
	public Grupo() {
		this.empleados = new ArrayList<EmpleadosGrupo>();
	}	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public List<EmpleadosGrupo> getEmpleados() {
		return empleados;
	}

	public void setItems(List<EmpleadosGrupo> empleados) {
		this.empleados = empleados;
	}

	public void addEmpleados(EmpleadosGrupo empleadosG) {
		empleados.add(empleadosG);
	}
	
	
	public boolean equals(Object obj) {
		if(this == obj) {
			return true;
		}
		
		if(!(obj instanceof Grupo)) {
			return false;
		}
		
		Grupo grupo = (Grupo) obj;
		return this.id!=null&& this.id.equals(grupo.getId());
		
	}
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
