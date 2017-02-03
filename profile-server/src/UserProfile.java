import java.util.ArrayList;


public class UserProfile 
{
	private String firstName;
	private String lastName;
	private String address;
	private String city;
	private String country;
	private String zip;
	private String userName;
	private String password;
	private String email;
	private ArrayList<CharterRequest> charterHistory;
	private ArrayList<ShuttleRequest> shuttleHistory;
	
	private void setFirstName(String s) {firstName = s;}
	private void setLastName(String s){lastName = s;}
	private void setAddress(String s){address = s;}
	private void setCity(String s){city = s;}
	private void setCountry(String s){country = s;}
	private void setZip(String s){zip = s;}
	private void setUserName(String s){zip = s;}
	private void setPassword(String s){password = s;}
	private void setEmail(String s){email = s;}
	
	private void addCharterRequest(CharterRequest c){charterHistory.add(c);}
	private void addShuttleRequest(ShuttleRequest s){shuttleHistory.add(s);}
	
	public String getFirstName(){return firstName;}
	public String getLastName(){return lastName;}
	public String getAddress(){return address;}
	public String getCity(){return city;}
	public String getCountry(){return country;}
	public String getZip(){return zip;}
	public String getUserName(){return userName;}
	public String getPassword(){return password;}//careful... make private?
	public String getEmail(){return email;}
	
	public ArrayList<CharterRequest> getCharterHistory(){return charterHistory;}
	public ArrayList<ShuttleRequest> getShuttleHistory(){return shuttleHistory;}
	
	public CharterRequest getCharterHistoryElement(int i)
	{
		return charterHistory.get(i);
	}
	public ShuttleRequest getShuttleHistoryElement(int i)
	{
		return shuttleHistory.get(i);
	}
	
	public UserProfile()
	{
		firstName="";
		lastName="";
		address="";
		city="";
		country="";
		zip="";
		userName="";
		password="";
		email="";
		charterHistory = new ArrayList<CharterRequest>();
		shuttleHistory = new ArrayList<ShuttleRequest>();
	}
	
	public UserProfile(String f, String l, String a, String ci, String co, String z, String u, String p, String e)
	{
		firstName=f;
		lastName=l;
		address=a;
		city=ci;
		country=co;
		zip=z;
		userName=u;
		password=p;
		email=e;
		charterHistory = new ArrayList<CharterRequest>();
		shuttleHistory = new ArrayList<ShuttleRequest>();
	}



	
}
