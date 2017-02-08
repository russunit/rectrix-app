import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Map.Entry;


public class ProfileDBTester 
{
	private ProfileDB profileDB;
	Scanner scan = new Scanner(System.in);
	
	public ProfileDBTester()
	{
		System.out.println("PROFILE DB TESTER");
		
		profileDB = new ProfileDB();
		
		
		String cmd = "";
		
		System.out.print("Type \"menu\" to display commands.");
		
		
		
		
		
		while(cmd!="exit")
		{

			cmd = "";
			cmd=cleanInput("");
			
				cmd = cmd.toLowerCase();
				
				switch(cmd){
				
				case "quit":
				case "exit":
				case "q":
					cmd="exit";
					break;
					
					
				case "menu":
					menu();
					break;
				case "addprofile":
					addprofile();
					break;
				case "editprofile":
					editprofile();
					break;
				case "deleteprofile":
					deleteprofile();
					break;
				case "listprofiles":
					listprofiles();
					break;
				case "addcharter":
					//addcharter();
					break;
				case "addshuttle":
					//addshuttle();
					break;
				case "viewprofile":
					viewprofile();
					break;
				case "viewcharter":
					//viewcharter();
					break;
				case "viewshuttle":
					//viewshuttle();
					break;

				case "clearscreen":
				case "clear":
					for(int clear = 0; clear < 100; clear++)
					  System.out.println() ;
					break;

					
				
				default:
					System.out.println("Command "+cmd+" not found.");
					
				}//end switch
				
				profileDB.saveToFile();//saves automatically
				
			}//end while

	}//end constructor
	
	public static void main(String[] args)
	{
		new ProfileDBTester();
	}
	
	private String cleanInput(String q){//q = question
		
		printStr(q+"\n>");
		String s = scan.nextLine();
		
		if(s.isEmpty()){
			s="_";
		}
		
		s = s.replace(' ', '_');
		
		while(!isClean(s)){
			System.out.println("No special characters please.");
			printStr(q);
			s=scan.nextLine();
		}
		return s;
	}
	
	private double cleanInputNum(String q){//q = question
		double inNum = 0;
		System.out.print(q+"\n>");
			try
			{
				inNum = scan.nextDouble();
				scan.nextLine();
				
			}
			catch(InputMismatchException e)
			{
				System.out.println("Please input a number.");
				scan.nextLine();//clears scanner buffer
				inNum = cleanInputNum(q);
			}
		
		return inNum;
	}
	
	private boolean isClean(String str){
		
		if(str.contains("#")|str.contains("$")){
			return false;}
		return true;
	}
	
	public void printStr(String s){
		System.out.print(s.replace('_', ' '));
	}
	
	public void menu()
	{
		printStr("addprofile\n");
		printStr("editprofile\n");
		printStr("deleteprofile\n");
		printStr("listprofiles\n");
		printStr("addcharter\n");
		printStr("addshuttle\n");
		printStr("viewprofile\n");
		printStr("viewcharter\n");
		printStr("viewshuttle\n");
	}
	
	public void addprofile()
	{
		String f; String l; String a; String ci; String co; String z; String u; String p; String e;
		f = cleanInput("firstname?");
		l = cleanInput("lastname?");
		a = cleanInput("address?");
		ci = cleanInput("city?");
		co = cleanInput("country?");
		z = cleanInput("zip?");
		u = cleanInput("username?");
		p = cleanInput("password?");
		e = cleanInput("email?");
		profileDB.addUserProfile(new UserProfile(f,l,a,ci,co,z,u,p,e));
		printStr("profile added.\n");
	}
	
	public void editprofile()
	{
		listprofiles();
		String choice = cleanInput("edit which profile?");
		for (int x = 0; x < profileDB.getProfiles().size(); x++)
			if(profileDB.getProfiles().get(x).getUserName().equals(choice))
			{
				UserProfile newProfile = profileDB.getProfiles().get(x);
				choice = cleanInput("which attribute?");
				switch(choice)
				{
				case "firstname":
					newProfile.setFirstName(cleanInput("?"));
					break;
				case "lastname":
					newProfile.setLastName(cleanInput("?"));
					break;
				case "address":
					newProfile.setAddress(cleanInput("?"));
					break;
				case "city":
					newProfile.setCity(cleanInput("?"));
					break;
				case "country":
					newProfile.setCountry(cleanInput("?"));
					break;
				case "zip":
					newProfile.setZip(cleanInput("?"));
					break;
				case "username":
					newProfile.setUserName(cleanInput("?"));
					System.out.println("TEST:" + newProfile.getUserName());
					break;
				case "password":
					newProfile.setPassword(cleanInput("?"));
					break;
				case "email":
					newProfile.setEmail(cleanInput("?"));
					break;
				}
				profileDB.updateUserProfile(newProfile);
				printStr("profile updated.\n");
			}
		
	}

	public void deleteprofile()
	{
		listprofiles();
		String choice = cleanInput("edit which profile?");
		for (int x = 0; x < profileDB.getProfiles().size(); x++)
			if(profileDB.getProfiles().get(x).getUserName().equals(choice))
			{
				profileDB.removeUserProfile(profileDB.getProfiles().get(x));
				printStr("profile deleted.\n");
			}
	}
	
	public void listprofiles()
	{
		//show all profiles
		for (int x = 0; x < profileDB.getProfiles().size(); x++)
			printStr(profileDB.getProfiles().get(x).getUserName() + "\n");
	}
	
	public void viewprofile()
	{
		listprofiles();
		String choice = cleanInput("view which profile?");
		for (int x = 0; x < profileDB.getProfiles().size(); x++)
			if(profileDB.getProfiles().get(x).getUserName().equals(choice))
			{
				UserProfile view = profileDB.getProfiles().get(x);
				printStr(view.getFirstName() + " " + view.getLastName());
				printStr("\n" + view.getAddress() + " " + view.getCity());
				printStr("\n" + view.getZip() + " " + view.getCountry());
				printStr("\n" + view.getEmail());
				printStr("\n" + view.getUserName());
				printStr("\n" + view.getPassword());
			}
	}
	
}//end class
