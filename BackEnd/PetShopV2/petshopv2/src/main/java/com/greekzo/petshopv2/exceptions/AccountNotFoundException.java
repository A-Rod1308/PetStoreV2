package com.greekzo.petshopv2.exceptions;

public class AccountNotFoundException extends RuntimeException{
	
	public AccountNotFoundException(Long id){
		super("Could not find account id: " + id);
	}

}
