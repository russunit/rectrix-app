/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Chris
 */
public class SchemaGenerator {
    private String original;
    private String generatedXML;
    public SchemaGenerator(String original)
    {
        this.original = original;
        //original is the string that we get from the http specifying what the server is supposed to do, We want to generate this into XNL
        generateSchema();
    }

    private void generateSchema() {
        //code that will generate the xml schema to communicate with skyvantage
        
    }
    public String getXML()
    {
        return generatedXML;
    }
    
}
