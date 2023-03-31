package com.team5.dashboard;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

	@Component
	@Entity
	@Table(name = "codexdb", schema = "public")
	public class CodexDb implements java.io.Serializable {

		private int id;
		private String managedbygroup;
		private String severity;
		private String hostname;
		private String hostip;
		private String productionType;
		
		public CodexDb() {
		}

		public CodexDb(int id) {
			this.id = id;
		}

		public CodexDb(int id, String managedbygroup, String severity, String hostname, String hostip, String productiontype) {
			this.id = id;
			this.managedbygroup = managedbygroup;
			this.hostname = hostname;
			this.severity = severity;
			this.hostip = hostip;
			this.productionType = productionType;
			
		}

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id", unique = true, nullable = false)
		public int getId() {
			return this.id;
		}

		public void setId(int id) {
			this.id = id;
		}

		@Column(name = "severity")
	
		public String getSeverity() {
			return severity;
		}

		public void setSeverity(String severity) {
			this.severity = severity;
		}

		

		

		@Column(name = "hostname")
		
		public String getHostname() {
			return hostname;
		}

		public void setHostname(String hostname) {
			this.hostname = hostname;
		}
		
		@Column(name = "managedbygroup")
		public String getmanagedbygroup() {
			return managedbygroup;
		}

		public void setmanagedbygroup(String managedbygroup) {
			this.managedbygroup = managedbygroup;
		}
		
		@Column(name="hostip")
		public String getHostip() {
			return hostip;
		}

		public void setHostip(String hostip) {
			this.hostip = hostip;
		}
		
		@Column(name="productiontype")
		public String getProductionType() {
			return productionType;
		}

		public void setProductionType(String productionType) {
			this.productionType = productionType;
		}

		


	}

