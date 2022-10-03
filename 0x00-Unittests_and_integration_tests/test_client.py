#!/usr/bin/env python3
"""
Module for unittests for the client module
"""
import unittest
from client import GithubOrgClient
from parameterized import parameterized
from unittest.mock import patch, MagicMock, PropertyMock


class TestGithubOrgClient(unittest.TestCase):
    """Tests the GithubOrgClient class in client.py"""

    @parameterized.expand([
        ("google"),
        ("abc")
    ])
    @patch('client.get_json',
           MagicMock(return_value={"key": "value"}))
    def test_org(self, org_name):
        """Tests the GithubOrgClient class in client.py"""
        test_client = GithubOrgClient(org_name)
        self.assertEqual(test_client.org, {"key": "value"})

    def test_public_repos_url(self):
        """Tests the GithubOrgClient class in client.py"""
        with patch('client.GithubOrgClient.org',
                   new_callable=PropertyMock,
                   return_value={"repos_url": "test_url"}) as mock:
            test_client = GithubOrgClient("google")
            self.assertEqual(test_client._public_repos_url, "test_url")

    @patch('client.get_json')
    def test_public_repos(self, license):
        """Tests public_repos method in client.py"""
        with patch('client.GithubOrgClient._public_repos_url',
                   new_callable=PropertyMock,
                   return_value="test_url") as mock:
            test_client = GithubOrgClient("google")
            test_client.public_repos()
            license.assert_called_once_with("test_url")
            