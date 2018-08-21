package com.training.ProductApp;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repo;
	private static final AtomicInteger counter = new AtomicInteger();
	public static int nextValue()
	{
		return counter.getAndIncrement();
	}
	
	public Product create(int pId, String pName,int price,int stock) {
		pId= nextValue()+1;
		
		return repo.save(new Product(pId,pName,price,stock));
	}

	public List<Product> getAll(){
		return repo.findAll();
		
	}
	
	public Product getById(int id) {
		Product p= repo.findByProductId(id);
		return p;
	}
	
	public Product update(int id, String pName,int price,int stock) {
		Product p=repo.findByProductId(id);
		
		
		p.setProductName(pName);
		p.setUnitPrice(price);
		p.setUnitsInStock(stock);
		
		return repo.save(p);
		
	}
	
	public void delete(int id) {
		Product p= repo.findByProductId(id);
		repo.delete(p);
		
		
		
	}
	
	
}
