import java.util.InputMismatchException;
import java.util.Scanner;


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
					//menu();
					break;
				case "addprofile":
					//addprofile();
					break;
				case "editprofile":
					//editprofile();
					break;
				case "deleteprofile":
					//deleteprofile();
					break;

				case "addcharter":
					//addcharter();
					break;
				case "addshuttle":
					//addshuttle();
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
	
	private String cleanInput(String q){//question
		
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
	
	private double cleanInputNum(String q){//question
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
				//allDone = false;//loops back around
			}
		
		return inNum;
	}
	
	private boolean isClean(String str){
		
		if(str.contains("~")|str.contains("$")|str.contains(":")|str.contains("@")){
			return false;}
		return true;
	}
	
	public void printStr(String s){
		System.out.print(s.replace('_', ' '));
	}
	
	
}//end class
