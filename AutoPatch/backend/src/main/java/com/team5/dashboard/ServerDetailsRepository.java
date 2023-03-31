package com.team5.dashboard;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

public interface ServerDetailsRepository extends JpaRepository<ServerDetail, Integer> {

}
