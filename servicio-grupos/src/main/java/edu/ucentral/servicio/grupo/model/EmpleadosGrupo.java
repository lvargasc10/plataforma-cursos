package edu.ucentral.servicio.grupo.model;

import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import edu.ucentral.common.curso.model.Curso;
import edu.ucentral.common.empleado.model.Empleado;

@Entity
@Table(name="empleados_grupo")
public class EmpleadosGrupo implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne
	@JoinColumn(name="empleado_id")
	@NotNull(message = "No puede ir vacio")
	private Empleado empleado;	
	private Integer fallas;
	@Column(name = "nota_final")
	private Double notaFinal;
		
	
	public Empleado getEmpleado() {
		return empleado;
	}

	public void setEmpleado(Empleado empleado) {
		this.empleado = empleado;
	}

	public Double getNotaFinal() {
		return notaFinal;
	}

	public void setNotaFinal(Double notaFinal) {
		this.notaFinal = notaFinal;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getFallas() {
		return fallas;
	}

	public void setFallas(Integer fallas) {
		this.fallas = fallas;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	public boolean equals(Object obj) {
		if(this == obj) {
			return true;
		}
		
		if(!(obj instanceof EmpleadosGrupo)) {
			return false;
		}
		
		EmpleadosGrupo empleadosG = (EmpleadosGrupo) obj;
		return this.id!=null&& this.id.equals(empleadosG.getId());
			}
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
