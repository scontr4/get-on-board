package com.example.SpringCrud;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {
    private List<Client> clients;

    // GET CLIENTS
    public ClientService() {
        clients = new ArrayList<Client>();
        // new Client(1, "Sebas", "Contreras Gonzalez", "1037666666");
        clients.add(new Client(1, "Sebas", "Contreras Gonzalez", "1037666666"));
        clients.add(new Client(2, "Juana", "Robledo Torres", "1037656666"));
        clients.add(new Client(3, "Sofia", "Posada Suarez", "1037646666"));
    }

    public List<Client> listClients(){
        return clients;
    }

    // BUSCAR CLIENT
    public Client findClientById(int id) {
        for (Client client: clients) {
            if (client.getId() == id) {
                return client;
            }
        }
        return null;
    }

    // CREAR CLIENT
    public Client saveNewClient(Client client) {
        clients.add(client);
        return client;
    }

    // ACTUALIZAR CLIENT
    public Client updateClient(int id, Client clientToUpdate) {
        for (int index = 0; index < clients.size(); index++) {
            Client client = clients.get(index);
            if(client.getId() == id) {
                clientToUpdate.setId(id);
                clients.set(index, clientToUpdate);
                return clientToUpdate;
            }
        }
        return null; // O podrías lanzar una excepción indicando que el cliente no fue encontrado
    }

    // ELIMINAR CLIENT
    public boolean deleteClient(int id) {
        for (Client client: clients) {
            if (client.getId() == id) {
                return clients.remove(client);
            }
        }
        return false;
    }

}
