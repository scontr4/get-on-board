package com.example.SpringCrud;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/client")
public class ClientController {
  @Autowired
  private ClientService service;

  @GetMapping
  public Iterable<Client> list() {
      System.out.println("Entró a get clients");
      return service.listClients();
  }

  @GetMapping("/{id}")
  public Client find(@PathVariable("id") int id) {
      return service.findClientById(id);
  }

  @PostMapping
  public Client create(@RequestBody Client client) {
      return service.saveNewClient(client);
  }
  
  @PutMapping("/{id}")
  public Client update(@PathVariable("id") int id, @RequestBody Client client) {
      
      return service.updateClient(id, client);
  }

  @DeleteMapping("/{id}")
  public boolean delete(@PathVariable("id") int id) {
    return service.deleteClient(id);
  }

}
