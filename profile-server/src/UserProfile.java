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
	private String id;
	
	public void setFirstName(String s) {firstName = s;}
	public void setLastName(String s){lastName = s;}
	public void setAddress(String s){address = s;}
	public void setCity(String s){city = s;}
	public void setCountry(String s){country = s;}
	public void setZip(String s){zip = s;}
	public void setUserName(String s){userName = s;}
	public void setPassword(String s){password = s;}
	public void setEmail(String s){email = s;}
	public void setId(String s){id = s;}
	
	public void addCharterRequest(CharterRequest c){charterHistory.add(c);}
	public void addShuttleRequest(ShuttleRequest s){shuttleHistory.add(s);}
	
	public String getFirstName(){return firstName;}
	public String getLastName(){return lastName;}
	public String getAddress(){return address;}
	public String getCity(){return city;}
	public String getCountry(){return country;}
	public String getZip(){return zip;}
	public String getUserName(){return userName;}
	public String getPassword(){return password;}//careful... make private?
	public String getEmail(){return email;}
	public String getId(){return id;}
	
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
