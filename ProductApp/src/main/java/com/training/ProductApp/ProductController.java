package com.training.ProductApp;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.HttpMethod;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

	@Autowired
	private ProductService service;
	
	@PostMapping("/api/product")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	public Product create(@RequestBody Product product) {
		

	
		
		service.create(product.getProductId(), product.getProductName(), product.getUnitPrice(), product.getUnitsInStock());
		

		return product;
		
	}
	
	
	@PutMapping("/api/product/{id}")
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces({MediaType.APPLICATION_JSON})
	
	public Product update(@PathVariable("id") int id,@RequestBody  Product item) {

		
		item.setProductId(id);

		service.update(id, item.getProductName(), item.getUnitPrice(), item.getUnitsInStock());
		
		return item;
		
		
	}
	
	
	@GetMapping("/api/product/{id}")
	public Product getProduct(@PathVariable("id") int id) {
		
		return service.getById(id);
		
	}
	
	@GetMapping("/api/product")
	public List<Product> getProducts() {
		return service.getAll();
	}
	
	@DeleteMapping("/api/product/{id}")
	public List<Product> deleteProd(@PathVariable("id") int id){
		service.delete(id);
		return service.getAll();
	}
	
}
