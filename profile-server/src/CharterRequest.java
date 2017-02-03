
public class CharterRequest
{
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String tripType;
	private String departLocation;
	private String departTime;
	private String departDate;
	private String arriveLocation;
	private String arriveTime;
	private String arriveDate;
	private String requirements;
	private String preferredCraft;
	
	private void setFirstName(String s){firstName = s;}
	private void setLastName(String s){lastName = s;}
	private void setPhoneNumber(String s){phoneNumber = s;}
	private void setTripType(String s){tripType = s;}
	private void setDepartLocation(String s){departLocation = s;}
	private void setDepartTime(String s){departTime = s;}
	private void setDepartDate(String s){departDate = s;}
	private void setArriveLocation(String s){arriveLocation = s;}
	private void setArriveTime(String s){arriveTime = s;}
	private void setArriveDate(String s){arriveDate = s;}
	private void setRequirements(String s){requirements = s;}
	private void setPreferredCraft(String s){preferredCraft = s;}
	
	public String getFirstName(){return firstName;}
	public String getLastName(){return lastName;}
	public String getPhoneNumber(){return phoneNumber;}
	public String getTripType(){return tripType;}
	public String getDepartLocation(){return departLocation;}
	public String getDepartTime(){return departTime;}
	public String getDepartDate(){return departDate;}
	public String getArriveLocation(){return arriveLocation;}
	public String getArriveTime(){return arriveTime;}
	public String getArriveDate(){return arriveDate;}
	public String getRequirements(){return requirements;}
	public String getPreferredCraft(){return preferredCraft;}
	
	public CharterRequest()
	{
		firstName="";
		lastName="";
		phoneNumber="";
		tripType="";
		departLocation="";
		departTime="";
		departDate="";
		arriveLocation="";
		arriveTime="";
		arriveDate="";
		requirements="";
		preferredCraft="";
	}
	
	public CharterRequest(String f, String l, String ph, String t, String dl, String dd, String dt, String al, String ad, String at, String r, String pr)
	{
		firstName=f;
		lastName=l;
		phoneNumber=ph;
		tripType=t;
		departLocation=dl;
		departTime=dt;
		departDate=dd;
		arriveLocation=al;
		arriveTime=at;
		arriveDate=ad;
		requirements=r;
		preferredCraft=pr;
	}
}

