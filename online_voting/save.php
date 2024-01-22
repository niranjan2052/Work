<?php
		require('connection.php');
		$vote = $_REQUEST['vote'];

        $sql="UPDATE tbCandidates SET candidate_cvotes=candidate_cvotes+1 WHERE candidate_name='$vote'";
        $result=mysqli_query($con,$sql) or die(mysqli_connect_error());

		//mysqli_query("UPDATE tbCandidates SET candidate_cvotes=candidate_cvotes+1 WHERE candidate_name='$vote'");

		//mysqli_close($con);
?> 