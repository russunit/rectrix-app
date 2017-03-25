/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Chris, Malcolm
 */
public class SchemaGenerator 
{
    public SchemaGenerator(String original)
    { }
    
    public String makeAccountsAvailabilityRQ(String airlineCode, String accountNumber, String accountName)
    {
    	String output = "";
    	output += "<AccountsAvailabilityRQ>\n" +
    			"	<AirlineCode>"+airlineCode+"</AirlineCode>\n" +
    			"	<AccountNumber>"+accountNumber+"</AccountNumber>\n" +
    			"	<AccountName>"+accountName+"</AccountName>\n" +
    			"</AccountsAvailabilityRQ>\n";
"
    	return output;
    }
    
    public String makeAirAvailabilityRQ(String airlineCode, String arrivalCode1, String departureCode1, String departureDate1, String flightNumber1,
    		String arrivalCode2, String departureCode2, String departureDate2, String flightNumber2)
    {
    	String output = "";
    	output += 	"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
					"<AirAvailabilityRQ>\n"+
					"	<AirlineCode>"+airlineCode+"</AirlineCode>\n"+
					"	<OriginDestination ArrivalCode=\""+arrivalCode1+"\" DepartureCode=\""+departureCode1 +"\"\n"+
					"		<Routes>\n"+
					"			<Route>\n"+
					"				<DepartureDate>"+departureDate1+"</DepartureDate>\n"+
					"				<FlightNumbers>\n"+
					"					<FlightNumber>"+flightNumber1+"</FlightNumber>\n"+
					"				</FlightNumbers>\n"+
					"			</Route>\n"+
					"		</Routes>\n"+
					"	</OriginDestination>\n"+
					"	<OriginDestination ArrivalCode=\""+arrivalCode2+"\" DepartureCode=\""+departureCode2+"\">\n"+
					"		<Routes>\n"+
					"			<Route>\n"+
					"				<DepartureDate>"+departureDate2+"</DepartureDate>\n"+
					"				<FlightNumbers>\n"+
					"					<FlightNumber>"+flightNumber2+"</FlightNumber>\n"+
					"				</FlightNumbers>\n"+
					"			</Route>\n"+
					"		</Routes>\n"+
					"	</OriginDestination>\n"+
					"</AirAvailabilityRQ>\n";
"
    	return output;
    }    
    
    public String makeCityPairRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeFareClassRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePassengerFieldsRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePricingRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeServiceListRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeTimeTableRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrCreateRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrAddPaymentRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrAddSegmentRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrAddServiceRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrChangeRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrDisplayRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrSplitRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makePnrStatusChangeRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeAvailablePayTypesRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeAircraftSeatsRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeInfantPricingRQ(String input)
    {
    	String output = "";
    	return output;
    }
    
    public String makeSeatAvailabilityStatusRQ(String input)
    {
    	String output = "";
    	return output;
    }
}
