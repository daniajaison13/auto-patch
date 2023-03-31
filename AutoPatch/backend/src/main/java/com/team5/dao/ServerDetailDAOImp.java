package com.team5.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.team5.dashboard.ServerDetail;

@Repository
public class ServerDetailDAOImp implements ServerDetailDAO{ 
	
	
	@Autowired
	private EntityManager entityManager;
	

	@Override
	public List<ServerDetail> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<ServerDetail> query = currSession.createQuery("from ServerDetail", ServerDetail.class);
		List<ServerDetail> list =  query.getResultList();
		return list;
	}
	
	
	
	
}
