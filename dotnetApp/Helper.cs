using System;
using System.IO;

public class Helper
{
    public static void ClearImage(string filePath)
    {
        try
        {
            var fullPath = Path.Combine(Directory.GetCurrentDirectory(), filePath);
            if (File.Exists(fullPath))
            {
                File.Delete(fullPath);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error deleting image: " + ex.Message);
        }
    }
}
