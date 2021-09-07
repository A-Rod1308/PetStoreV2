package com.greekzo.petshopv2.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.greekzo.petshopv2.models.UserAccount;

public interface UserAccountDao extends JpaRepository<UserAccount,Long> {
	

}
