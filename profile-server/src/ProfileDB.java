import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.Map.Entry;
import java.util.Objects;
import java.net.ServerSocket;
import java.util.UUID;


public class ProfileDB 
{
	private HashMap<String, UserProfile> profiles;
	//each profile is assigned a random uuid string for a unique id.
	
	private void addUserProfile(UserProfile up)
	{
		//generates a random uuid, checks to make sure it is unique, then adds the profile to the map
		String uuid = UUID.randomUUID().toString();
		while(profiles.containsKey(uuid))
			uuid = UUID.randomUUID().toString();
		profiles.put(uuid, up);
	}
	
	public String getIdFromUsernamePassword(String name, String pass)
	{
		//returns the ID of the profile with the username name and the password pass, or ""
		UserProfile theProfile = null;
		Collection<UserProfile> profileCollection = profiles.values();
		ArrayList<UserProfile> profileList = new ArrayList<UserProfile>(profileCollection);
		for(int x = 0; x < profileList.size(); x ++)
		{
			if(profileList.get(x).getUserName() == name && profileList.get(x).getPassword() == pass)
				theProfile = profileList.get(x);
		}
		
		for (Entry<String, UserProfile> entry : profiles.entrySet()) {
	        if (Objects.equals(theProfile, entry.getValue())) {
	            return entry.getKey();
	        }
	    }
		return "";
	}
	
	public String getIdFromProfile(UserProfile u)
	{
		//returns the uuid of the matching profile, or ""
		for (Entry<String, UserProfile> entry : profiles.entrySet()) {
	        if (Objects.equals(u, entry.getValue())) {
	            return entry.getKey();
	        }
	    }
		return "";
	}
	
	private UserProfile userProfileFromString(String s)
	{
		//returns a user profile from a String containing all the necessary info
		StringTokenizer t = new StringTokenizer(s, "$");
		/*public UserProfile(String f, String l, String a, String ci, String co, String z, String u, String p, String e)*/
		UserProfile profile = new UserProfile(t.nextToken(), t.nextToken(), 
				t.nextToken(), t.nextToken(), t.nextToken(), t.nextToken(), 
				t.nextToken(), t.nextToken(), t.nextToken());
		
		int charterSize = Integer.parseInt(t.nextToken());
		for(int x = 0; x < charterSize; x++)
		{
			profile.addCharterRequest(new CharterRequest(t.nextToken(), t.nextToken(), 
					t.nextToken(), t.nextToken(), t.nextToken(), t.nextToken(), 
					t.nextToken(), t.nextToken(), t.nextToken(), t.nextToken(), 
					t.nextToken(), t.nextToken()));
		}
		
		int shuttleSize = Integer.parseInt(t.nextToken());
		for(int x = 0; x < shuttleSize; x++)
		{
			profile.addShuttleRequest(new ShuttleRequest(t.nextToken(), t.nextToken(), 
					t.nextToken(), t.nextToken(), t.nextToken(), t.nextToken(), 
					t.nextToken(), t.nextToken(), t.nextToken(), t.nextToken(), 
					Integer.parseInt(t.nextToken()), Integer.parseInt(t.nextToken()), 
					Integer.parseInt(t.nextToken())));
		}
		
		return profile;
	}
	
	private void addUserProfileFromString(String s)
	{
		//adds a user profile from a String containing all the necessary info
		addUserProfile(userProfileFromString(s));
	}
	
	private void updateUserProfile(UserProfile u)
	{
		//update the user profile with the argument's matching name and password.
		String id = getIdFromProfile(u);
		profiles.put(id, u);
	}
	
	private void updateUserProfileFromString(String s)
	{
		updateUserProfile(userProfileFromString(s));
	}
	
	public UserProfile getUserProfileById(String id)
	{
		//returns the user profile with the appropriate id
		return profiles.get(id);
	}
	
	private String profileToString(UserProfile userProfile)
	{
		//returns a String containing all the profile info
		int charterHistorySize = userProfile.getCharterHistory().size();
		int shuttleHistorySize = userProfile.getShuttleHistory().size();
		
		String outString = "";
		outString += userProfile.getFirstName() + "$";
		outString += userProfile.getLastName() + "$";
		outString += userProfile.getAddress() + "$";
		outString += userProfile.getCity() + "$";
		outString += userProfile.getCountry() + "$";
		outString += userProfile.getZip() + "$";
		outString += userProfile.getUserName() + "$";
		outString += userProfile.getPassword() + "$";
		outString += userProfile.getEmail() + "$";
		
		outString += charterHistorySize + "$";
		for(int x = 0; x < charterHistorySize; x++)
		{
			outString += userProfile.getCharterHistoryElement(x).getFirstName() + "$";
			outString += userProfile.getCharterHistoryElement(x).getLastName() + "$";
			outString += userProfile.getCharterHistoryElement(x).getPhoneNumber() + "$";
			outString += userProfile.getCharterHistoryElement(x).getTripType() + "$";
			outString += userProfile.getCharterHistoryElement(x).getDepartLocation() + "$";
			outString += userProfile.getCharterHistoryElement(x).getDepartDate() + "$";
			outString += userProfile.getCharterHistoryElement(x).getDepartTime() + "$";
			outString += userProfile.getCharterHistoryElement(x).getArriveLocation() + "$";
			outString += userProfile.getCharterHistoryElement(x).getArriveDate() + "$";
			outString += userProfile.getCharterHistoryElement(x).getArriveTime() + "$";
			outString += userProfile.getCharterHistoryElement(x).getRequirements() + "$";
			outString += userProfile.getCharterHistoryElement(x).getPreferredCraft() + "$";
		}

		outString += shuttleHistorySize + "$";
		for(int x = 0; x < shuttleHistorySize; x++)
		{
			outString += userProfile.getShuttleHistoryElement(x).getFirstName() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getLastName() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getPhoneNumber() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getTripType() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getDepartLocation() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getDepartDate() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getDepartTime() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getArriveLocation() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getArriveDate() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getArriveTime() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getNumAdults() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getNumChildren() + "$";
			outString += userProfile.getShuttleHistoryElement(x).getNumInfants() + "$";
		}
		
		return outString;
	}
	
	private String profileToStringFromId(String id)
	{
		//returns a String containing all the profile info
		
		UserProfile userProfile = getUserProfileById(id);
		int charterHistorySize = userProfile.getCharterHistory().size();
		int shuttleHistorySize = userProfile.getShuttleHistory().size();

		return profileToString(userProfile);
	}
	
	public void saveToFile()
	{
		if(profiles.isEmpty())
			return;
		
		//saves the data to file
		String data = "";
		
		for (Entry<String, UserProfile> entry : profiles.entrySet())
		{
			data += entry.getKey() + "#";
			data += profileToString(entry.getValue()) + "#";
		}
		
		File logFile =new File("profile.db");
		
		try{
			if(!logFile.exists()){
				logFile.createNewFile();
			}
			
			PrintWriter writer = new PrintWriter(logFile);
			writer.print("");
			writer.close();
			//clears contents of file
			//http://stackoverflow.com/questions/6994518/how-to-delete-the-content-of-text-file-without-deleting-itself
			
				
				FileWriter logWriter = new FileWriter(logFile.getName(),true);
		        BufferedWriter buff = new BufferedWriter(logWriter);
		        buff.write(data);
		        buff.close();
		}
		catch(IOException e){
			System.out.println(e.getStackTrace());
		}
		
	}
	
	public void loadFromFile()
	{
		//loads data from file
		try{
			String entireFileText = new Scanner(new File("profile.db")).next();
			
			
			//System.out.println(entireFileText);///////////////////////////////
			String fileString = entireFileText;//pull string from profile.db
			
			StringTokenizer t = new StringTokenizer(fileString, "#");
			while(t.hasMoreTokens()){
				profiles.put(t.nextToken(), userProfileFromString(t.nextToken()));
			}
		}
		catch (FileNotFoundException e){
			System.out.println("FILE NOT FOUND");
			//e.printStackTrace();
			
		}
		catch (NoSuchElementException e){
			System.out.println("EMPTY FILE");
			//e.printStackTrace();
		}
		
	}
	
	public ProfileDB()
	{
		profiles = new HashMap<String, UserProfile>();
		loadFromFile();
	}
	
	
}
