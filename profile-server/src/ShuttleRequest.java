
public class ShuttleRequest
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
	private int numAdults;
	private int numChildren;
	private int numInfants;
	
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
	private void setNumAdults(int i){numAdults = i;}
	private void setNumChildren(int i){numChildren = i;}
	private void setNumInfants(int i){numInfants = i;}
	
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
	public int getNumAdults(){return numAdults;}
	public int getNumChildren(){return numChildren;}
	public int getNumInfants(){return numInfants;}
	
	public ShuttleRequest()
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
		numAdults=0;
		numChildren=0;
		numInfants=0;
	}
	
	public ShuttleRequest(String f, String l, String ph, String t, String dl, String dd, String dt, String al, String ad, String at, int na, int nc, int ni)
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
		numAdults = na;
		numChildren = nc;
		numInfants = ni;
	}
}
