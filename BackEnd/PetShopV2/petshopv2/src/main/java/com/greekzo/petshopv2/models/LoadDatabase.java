package com.greekzo.petshopv2.models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.greekzo.petshopv2.daos.UserAccountDao;

@Configuration
public class LoadDatabase {
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	@Bean
	CommandLineRunner initDatabase(UserAccountDao repository) {
		return args -> {
			log.info("Preloading " + repository.save(new UserAccount("Alonso Rodriguez", "GreekZo","password","email@mail.com","notAdmin")));
			log.info("Preloading " + repository.save(new UserAccount("Admin", "admin","password","admin@mail.com","Admin")));
		};
	}
	
}
