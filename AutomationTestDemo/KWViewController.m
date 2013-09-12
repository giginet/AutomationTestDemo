//
//  KWViewController.m
//  AutomationTestDemo
//
//  Created by giginet on 9/13/13.
//  Copyright (c) 2013 Kawaz. All rights reserved.
//

#import "KWViewController.h"

@interface KWViewController ()

@end

@implementation KWViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.count = 0;
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)pressMeButtonPressed:(id)sender
{
    ++self.count;
    self.textView.text = [NSString stringWithFormat:@"pressed %d times", self.count];
}

@end
