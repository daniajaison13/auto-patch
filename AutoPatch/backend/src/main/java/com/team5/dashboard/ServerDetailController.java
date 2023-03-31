package com.team5.dashboard;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping(path = "/api")
public class ServerDetailController {
	
	@Autowired
	private ServerDetailsRepository serverDetailRepo;
	
	@Autowired
	private OELServerDetailsRepository oelServerDetailRepo;
	
	@Autowired
	private CodexDbRepository codexrepo; 
	
	@Autowired
	private IncidentRetriever retriever;
	
	@Autowired
	private RegenerateToken regtoken;
	
	@RequestMapping(method = RequestMethod.GET, value = "/serverdetails", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ServerDetail> get() {
		List<ServerDetail> listdetails = serverDetailRepo.findAll();
		return listdetails;
	}
	
	
	@CrossOrigin(value = "http://localhost:3000")
	@RequestMapping(method = RequestMethod.GET , value ="/oel/serverdetails" , produces = MediaType.APPLICATION_JSON_VALUE)
	public List<OELServerDetails> getOelServerDetails() {
		List<OELServerDetails> listdetails = oelServerDetailRepo.findAll();
		return listdetails;
		
	}
	
	
	@GetMapping("/verify")
	public String verify() {
		return "verify";
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/remedyticket", produces = MediaType.APPLICATION_JSON_VALUE)
	public String getUpdateIncident(@RequestParam(value = "id", required = true) Integer id) throws Exception{
		CodexDb codexobj = codexrepo.getOne(id);
		String hostname = codexobj.getHostname();
		String managedbygrp = codexobj.getmanagedbygroup();
		String severity = codexobj.getSeverity();
		regtoken.getToken();
		return retriever.getIncident(managedbygrp, severity, hostname).toString();
		 
	}
	
	//CORPFSGOTH01
	@RequestMapping(method = RequestMethod.GET, value = "/codexdetails", produces = MediaType.APPLICATION_JSON_VALUE)
	public CodexDb getCodexDetails(@RequestParam(value = "hostname", required = true) String hostname) throws Exception{
		List<CodexDb> listdetails = codexrepo.findAll();
		//List<CodexDb> serverdetails = new ArrayList<>();
		for (CodexDb codexDb : listdetails) {
			if(codexDb.getHostname().equalsIgnoreCase(hostname)) {
				return codexDb;
			}
		}
		return null;
	}

}
