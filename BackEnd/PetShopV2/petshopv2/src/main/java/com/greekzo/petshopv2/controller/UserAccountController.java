package com.greekzo.petshopv2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greekzo.petshopv2.daos.UserAccountDao;
import com.greekzo.petshopv2.exceptions.AccountNotFoundException;
import com.greekzo.petshopv2.models.UserAccount;

@RestController
public class UserAccountController {
	
	private final UserAccountDao acDao;
	
	UserAccountController(UserAccountDao acDao){
		this.acDao =acDao;
		
	}
	
	@GetMapping("user")List<UserAccount> all(){
		return acDao.findAll();
		}
	
	@PostMapping("/user")UserAccount newAccount(@RequestBody UserAccount newAccount){
		return acDao.save(newAccount);
		}
	
	
	@GetMapping("user/{id}")
	UserAccount single(@PathVariable Long id){
		return acDao.findById(id)
				.orElseThrow(() -> new AccountNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")UserAccount replaceAccount(@RequestBody UserAccount newAccount ,@PathVariable Long id){
		return acDao.findById(id)
				.map(UserAccount -> {
		UserAccount.setId(newAccount.getId());
		UserAccount.setName(newAccount.getName());
		UserAccount.setUsername(newAccount.getUsername());
		UserAccount.setPassword(newAccount.getPassword());
		UserAccount.setEmail(newAccount.getEmail());
		UserAccount.setRole(newAccount.getRole());
			return acDao.save(newAccount);
		})
				.orElseGet(() -> {
			newAccount.setId(id);
			return acDao.save(newAccount);
		});
		}
	
	@DeleteMapping("/user/{id}")
	void deleteAccount(@PathVariable Long id) {
		acDao.deleteById(id);
	}

}
