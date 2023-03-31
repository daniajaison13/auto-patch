package com.team5.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team5.dao.ServerDetailDAO;
import com.team5.dashboard.ServerDetail;

@Service
public class ServerDetailServcieImp implements ServerDetailService{
	
	@Autowired
	private ServerDetailDAO serverDetailDAO;

	@Transactional
	@Override
	public List<ServerDetail> get() {
		return serverDetailDAO.get();
	}
	

}
