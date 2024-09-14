Notes:

This is my notes section about CS 260.

9/12
I learned a lot today about git and how it interacts with the environment and GitHub. For instance, it is quite easy to put a repository you have made in GitHub into your files by using the command line, going to the perfered directory and using:

git clone "github link"

this then puts the files from the repository in the directory which can be accessed in an environment like VS Code or Pycharm. Another thing I learned was how to push, add, pull, and commit from the command line. To do this you navigate to the directory you wish to change and use commands like:

git pull

git add "filename"

git commit -am "commit name"

git push

These all are very essential and should be used through the workflow of any code. I also learned a little bit about merging. I'm not 100% certain on this and will need to do some additional learning but if two instances of the code are changed, you can compare the changes in an environment and choose which one to keep.

9/14
Today I created a website instance? Server instance? IP Address? I'm not exactly sure what it is but it is run through AWS. Here's the details:

IP: http://98.82.105.184

How to run from console:

ssh -i [key pair file] ubuntu@98.82.105.184

How to check stats:

ls -l
