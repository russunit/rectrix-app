import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;


public class ProfileServer 
{
	//private ServerSocket server;
	//private Socket socket;
	private ProfileDB profileDB;
	
	public String login(String user, String password)
	{
		//returns "OK" if logged in successfully
		for(int x = 0; x < profileDB.getNumProfiles(); x++)
		{
			if(profileDB.getProfiles().get(x).getUserName().equals(user))
				if(profileDB.getProfiles().get(x).getPassword().equals(password))
				{
					for(int y = 0; y < profileDB.getNumLoggedInUsers(); y++)
						if(profileDB.getLoggedInUserNames().get(y).equals(user))
							return "alreadyloggedin";
					profileDB.logInUser(user);
					return "OK";
				}
		}
		return "notfound";
	}
	
	public boolean logout(String user)
	{
		//returns true if logged out successfully
		for(int y = 0; y < profileDB.getNumLoggedInUsers(); y++)
		{
			if(profileDB.getLoggedInUserNames().get(y).equals(user))
			{
				profileDB.logOutUser(y);
				return true;
			}
		}
		return false;
	}
	
	public boolean update(String userString)
	{
		//updates user profile from string containing all userprofile info
		//return true if updated successfully
		return profileDB.updateUserProfileFromString(userString);
	}
	
	public boolean signup(String userString)
	{
		//adds user profile from string containing all userprofile info
		//return true if signed up successfully
		return profileDB.addUserProfileFromString(userString);
	}
	
	public static void main(String[] args) throws Exception
	{
		final ServerSocket server = new ServerSocket(7777);
		System.out.println("Waiting for connection on port 7777 ....");
		
		while(true)
		{
			try(Socket clientSocket = server.accept())
			{
				System.out.println("connected.");
				InputStreamReader isr = new InputStreamReader(clientSocket.getInputStream());
				BufferedReader reader = new BufferedReader(isr);
				
				String line = reader.readLine();
				String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				while(!line.isEmpty())
				{
					//clientSocket.getOutputStream().write(line.getBytes("UTF-8"));
					System.out.println(line);
					line = reader.readLine();
					httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + line;
				}
				
			}
		}
	}
	
}
